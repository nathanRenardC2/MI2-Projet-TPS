
    <?php

    $login_normal = "user";
    $login_admin = "admin";
    $password = "ajax";

    if (isset($_POST['login']) && isset($_POST['password'])) {

        if ($_POST['login'] == $login_normal && $_POST['password'] == $password) {
            session_start();
            $_SESSION['user'] = $login_normal;
            echo "normal";
        } else if ($_POST['login'] == $login_admin && $_POST['password'] == $password) {
            session_start();
            $_SESSION['user'] = $login_admin;
            echo "admin";
        } else {
            echo "Nom d'utilisateur ou mot de passe incorrect";
        }
    }
    ?>
