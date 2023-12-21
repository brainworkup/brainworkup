<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $firstName = $_POST['Text1'];
    $lastName = $_POST['Text2'];
    $email = $_POST['userEmail'];
    $message = $_POST['BigText'];

    // Save to file (append mode)
    $file = fopen("contact_submissions.txt", "a");
    fwrite($file, "First Name: $firstName, Last Name: $lastName, Email: $email, Message: $message\n");
    fclose($file);

    // Redirect or display a message
    echo "Thank you for your submission!";
}
?>
