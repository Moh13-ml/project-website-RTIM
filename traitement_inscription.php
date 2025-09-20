<?php

// Inclure les fichiers PHPMailer
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

// Chemins d'accès aux fichiers PHPMailer
require 'lib/src/Exception.php';
require 'lib/src/PHPMailer.php';
require 'lib/src/SMTP.php';

// Définir les informations de connexion à la base de données
$serveur = "localhost";
$utilisateur = "root";
$mot_de_passe_bdd = "qwerty123";
$nom_bdd = "formulaire_db";

// Vérifier si le formulaire a été soumis
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Récupérer et nettoyer les données du formulaire
    $prenom = htmlspecialchars($_POST['prenom']);
    $nom = htmlspecialchars($_POST['nom']);
    $email_utilisateur = htmlspecialchars($_POST['email']); 
    $telephone = htmlspecialchars($_POST['telephone']);
    $formation = htmlspecialchars($_POST['formation']);
    $niveau = htmlspecialchars($_POST['niveau']);
    $experience = htmlspecialchars($_POST['experience']);
    $motivation = htmlspecialchars($_POST['motivation']);

    // Se connecter à la base de données
    try {
        $connexion = new PDO("mysql:host=$serveur;dbname=$nom_bdd", $utilisateur, $mot_de_passe_bdd);
        $connexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        // Préparer et exécuter la requête d'insertion
        $sql = "INSERT INTO candidatures (prenom, nom, email, telephone, formation, niveau, experience, motivation) 
                VALUES (:prenom, :nom, :email, :telephone, :formation, :niveau, :experience, :motivation)";
        $stmt = $connexion->prepare($sql);
        $stmt->bindParam(':prenom', $prenom);
        $stmt->bindParam(':nom', $nom);
        $stmt->bindParam(':email', $email_utilisateur);
        $stmt->bindParam(':telephone', $telephone);
        $stmt->bindParam(':formation', $formation);
        $stmt->bindParam(':niveau', $niveau);
        $stmt->bindParam(':experience', $experience);
        $stmt->bindParam(':motivation', $motivation);
        
        if ($stmt->execute()) {
            
            // L'insertion a réussi, maintenant envoyer l'email
            try {
                $mail = new PHPMailer(true);
                $mail->isSMTP();
                $mail->Host       = 'smtp.gmail.com'; // ou 'mail.votredomaine.com'
                $mail->SMTPAuth   = true;
                $mail->Username   = 'mohcisse540@gmail.com'; // email
                $mail->Password   = 'aijnhjeabqvcfklt';    // Mot de passe d'application
                $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS; // Ou 'PHPMailer::ENCRYPTION_SMTPS' pour le port 465
                $mail->Port       = 587; // Ou 465 pour SMTPS

                // Destinataires
                $mail->setFrom('noreply@rtim.com', 'Formulaire Candidature');
                $mail->addAddress('mohcisse540@gmail.com', 'Administrateur');

                // Contenu de l'email
                $mail->isHTML(false);
                $mail->Subject = 'Nouvelle Candidature Envoyée(RTIM)';
                $mail->Body    = "Une nouvelle candidature a été soumise :\n\n"
                               . "Prénom : " . $prenom . "\n"
                               . "Nom : " . $nom . "\n"
                               . "Email : " . $email_utilisateur . "\n"
                               . "Téléphone : " . $telephone . "\n"
                               . "Formation : " . $formation . "\n"
                               . "Niveau : " . $niveau . "\n"
                               . "Expérience : " . $experience . "\n"
                               . "Motivation : " . $motivation . "\n\n";

                $mail->send();
                echo "Votre candidature a été soumise avec succès et une notification a été envoyée à l'administrateur. ✅";

            } catch (Exception $e) {
                // Si l'envoi d'e-mail échoue
                echo "Votre candidature a été soumise avec succès, mais la notification par e-mail a échoué. 📧 Erreur: {$mail->ErrorInfo}";
            }

        } else {
            echo "Une erreur est survenue lors de l'envoi de votre candidature. ❌";
        }

    } catch(PDOException $e) {
        // Gérer les erreurs de la base de données
        if ($e->getCode() == '23000') {
            echo "Cet email est déjà utilisé. Veuillez en utiliser un autre.";
        } else {
            echo "Erreur : " . $e->getMessage();
        }
    }
} else {
    // Rediriger si la page est accédée directement
    header("Location: /index.html");
    exit();
}
?>