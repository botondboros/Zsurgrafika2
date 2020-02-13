<?php

	$errorMSG = "";

	// First Name
	if (empty($_POST["first-name"])) {
		$errorMSG = "First Name is required. ";
	} else {
		$fname = $_POST["first-name"];
	}
	
	// Last Name
	if (empty($_POST["last-name"])) {
		$errorMSG .= "Last Name is required. ";
	} else {
		$lname = $_POST["last-name"];
	}

	// Email
	if (empty($_POST["email"])) {
		$errorMSG .= "Email is required. ";
	} else {
		$email = $_POST["email"];
	}
	
	// Phone Number
	if (empty($_POST["phone-number"])) {
		$errorMSG .= "Email is required. ";
	} else {
		$phone = $_POST["phone-number"];
	}

	// MESSAGE
	if (empty($_POST["message"])) {
		$errorMSG .= "Message is required. ";
	} else {
		$message = $_POST["message"];
	}


	$EmailTo = "info@yourdomain.com"; // Replace with your email.
	$subject = 'Contact From Your Site';

	// prepare email body text
	$Body = "";
	$Body .= "Name: ";
	$Body .= $fname." ".$lname;
	$Body .= "\n";
	$Body .= "Email: ";
	$Body .= $email;
	$Body .= "\n";
	$Body .= "Phone Number: ";
	$Body .= $phone;
	$Body .= "\n";
	$Body .= "Message: ";
	$Body .= $message;
	$Body .= "\n";

	// send email
	$success = @mail($EmailTo, $subject, $Body, "From:".$email);

	// redirect to success page
	if ($success && $errorMSG == ""){
	   echo "success";
	}else{
		if($errorMSG == ""){
			echo "Something went wrong :(";
		} else {
			echo $errorMSG;
		}
	}

?>