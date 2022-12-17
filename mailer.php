<?php
$name = strip_tags(trim($_POST["name"]));
    $name = str_replace(array("\r","\n"),array(" "," "),$name);
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $message = trim($_POST["message"]);
    $phone = trim($_POST["phone"]);
 
    // Kontroluje data popř. přesměruje na chybovou adresu
    if (empty($name) OR empty($phone) OR empty($message) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        header("Location:https://www.hacknibudoucnost.cz/index.html?success=-1#form");
        exit;
    }
 
    // Nastavte si email, na který chcete, aby se vyplněný formulář odeslal - jakýkoliv váš email
    $recipient = "verca.burgrova@centrum.cz";
 
    // Nastavte předmět odeslaného emailu
    $subject = "Máte nový kontakt od: $name";
 
    // Obsah emailu, který se vám odešle
    $email_content = "Jméno: $name\n";
    $email_content .= "Email: $email\n\n";
    $email_content .= "Zpráva:\n$message\n";
    $email_content .= "Telefon:\n$phone\n";
 
    // Emailová hlavička
    $email_headers = "From: $name <$email>";
 
    // Odeslání emailu - dáme vše dohromady
    mail($recipient, $subject, $email_content, $email_headers);
   
    // Přesměrování na stránku, pokud vše proběhlo v pořádku
    header("Location:https://www.hacknibudoucnost.cz/dekovaci.html?success=1#form");
?>
