<?php
/* Recibe la información del formulario y lo guarda en la variable name*/
$email=$_POST["email"];

/* Muestra la variable $email */
var_dump($email);

/* Variables para conectar a la base de datos de MySQL */
$host="localhost";/*Host de la base de datos */
$dbname="emails_db";/* Nombre de la base de datos */
$username="root";/* Usuario */
$password="";/* Contraseña */

$conn=mysqli_connect($host,$username,$password,$dbname); /*Conecta las variables a la base de datos */

/*Comprobar error al conectar a la base datos*/
if (mysqli_connect_error()){
    die("Connection error: ".mysqli_connect_error());   
}

/* Crea una consulta SQL para insertar un nuevo registro en la tabla */
$sql="INSERT INTO emails (email)
      VALUES(?)";

/* Inicia una nueva declaración utilizando la conexión a la base de datos. */
$stmt=mysqli_stmt_init($conn);

/* Prepara la consulta SQL para su ejecución */
if(!mysqli_stmt_prepare($stmt,$sql);){
    die(mysqli_error($conn));
}

/* Asocia el parámetro ? en la consulta SQL con la variable  $email*/
mysqli_stmt_bind_param($stmt,"s",$email);

/**Esta línea ejecuta la consulta preparada. En este punto, la consulta SQL se envía a la base de datos,
 * se reemplaza el ? con el valor de $name, y se inserta un nuevo registro en la tabla message */
mysqli_stmt_execute($stmt);