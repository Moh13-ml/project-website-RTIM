<?php

//Définir les informations de connexion à la base de données
$serveur = "localhost";
$utilisateur = "root"; //nom d'utilisateur de BDD
$mot_de_passe_bdd = "qwerty123"; //mot de passe de BDD
$nom_bdd = "formulaire_db"; //nom de votre BDD

//Vérifier si le formulaire a été soumis
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    //Récupérer les données du formulaire
    $prenom = htmlspecialchars($_POST['prenom']);
    $nom = htmlspecialchars($_POST['nom']);
    $email = htmlspecialchars($_POST['email']);
    $telephone = htmlspecialchars($_POST['telephone']);
    $formation = htmlspecialchars($_POST['formation']);
    $niveau = htmlspecialchars($_POST['niveau']);
    $experience = htmlspecialchars($_POST['experience']);
    $motivation = htmlspecialchars($_POST['motivation']);

    //Se connecter à la base de données en utilisant PDO
    try {
        $connexion = new PDO("mysql:host=$serveur;dbname=$nom_bdd", $utilisateur, $mot_de_passe_bdd);
        $connexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        //Préparer la requête SQL d'insertion
        $sql = "INSERT INTO candidatures (prenom, nom, email, telephone, formation, niveau, experience, motivation) 
                VALUES (:prenom, :nom, :email, :telephone, :formation, :niveau, :experience, :motivation)";
        
        $stmt = $connexion->prepare($sql);

        //Lier les paramètres et exécuter la requête
        $stmt->bindParam(':prenom', $prenom);
        $stmt->bindParam(':nom', $nom);
        $stmt->bindParam(':email', $email);
        $stmt->bindParam(':telephone', $telephone);
        $stmt->bindParam(':formation', $formation);
        $stmt->bindParam(':niveau', $niveau);
        $stmt->bindParam(':experience', $experience);
        $stmt->bindParam(':motivation', $motivation);
        
        if ($stmt->execute()) {
            echo "Votre candidature a été soumise avec succès ! ✅";
        } else {
            echo "Une erreur est survenue lors de l'envoi de votre candidature. ❌";
        }

    } catch(PDOException $e) {
        // Gérer les erreurs de la base de données
        if ($e->getCode() == '23000') { // Code d'erreur pour une clé unique dupliquée
            echo "Cet email est déjà utilisé. 📧";
        } else {
            echo "Erreur : " . $e->getMessage();
        }
    }
} else {
    // Rediriger si la page est accédée directement sans soumission de formulaire
    header("Location: /votre_page_formulaire.html"); //l'URL de votre formulaire
    exit();
}
?>