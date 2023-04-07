<?php
header('Content-Type: application/json');

$servername = "localhost"; // Replace with your server name
$username = "root"; // Replace with your MySQL username
$password = ""; // Replace with your MySQL password
$dbname = "contactform"; // Replace with your MySQL database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    $response = array('status' => 'error', 'message' => 'Connection failed: ' . $conn->connect_error);
} else {
    // Get form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Prepare SQL statement to insert data
    $sql = "INSERT INTO contactformtable (name, email, message) VALUES ('$name', '$email', '$message')";

    // Execute SQL statement
    if ($conn->query($sql) === TRUE) {
        $response = array('status' => 'success', 'message' => 'Data saved successfully!');
    } else {
        $response = array('status' => 'error', 'message' => 'Failed to save data. Please try again later.');
    }

    $conn->close();
}

echo json_encode($response);
?>
