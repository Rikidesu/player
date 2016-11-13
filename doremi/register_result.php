<?
session_start();

        
        require_once("config.php");
        
        $sql = "select * from user where user='{$_POST['username']}'";
        
        $result = $db->query($sql);
        
        $rows = $result->num_rows;
        
        if($rows<1){
        
        $sql = "insert into user (user,password,nick,createdate) values ('{$_POST['username']}','{$_POST['password']}','{$_POST['nickname']}',now())";
        
        if($result = $db->query($sql)){
        
            $result = $db->query("select LAST_INSERT_ID() as lastid");
            $row = $result->fetch_object();
            
            $_SESSION['user']['id'] = $row->lastid;
            $_SESSION['user']['nickname'] = $_POST['nickname'];

            require_once("login_info.php");
            exit;

        
        }
        else {
        
            $data['result'] = "fault";
            $data['content'] = "注册失败，数据库错误";
            echo json_encode($data);
        
        };
        
        }else {
        
            $data['result'] = "fault";
            $data['content'] = "已存在的用户名";
            echo json_encode($data);
        
        }
        



?>