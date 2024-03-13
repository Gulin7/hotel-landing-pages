<?php
    if( isset($_POST['name']) && isset($_POST['email']) && isset($_POST['message']) ){
        $admin_email = "";
        $name = $_POST['name'];
        $email = $_POST['email'];
        $message = $_POST['message'];
        $phone = $_POST['phone'];

        mail($admin_email, "New Form Submission", $message . ' - ' . $phone, "From:" . $email);

        header('Location: ');
    }