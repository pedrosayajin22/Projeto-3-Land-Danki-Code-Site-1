<?php
class Mail
{
    public $opt, $mailer;
    public $email = "";
    public $senha = "";
    public function __construct(array $parametros)
    {
        include('phpmailer/PHPMailerAutoLoad.php');
        $this->mailer = new PHPMailer();

        $this->mailer->IsSMTP();
        $this->mailer->Host = ""; //servidor smtp da hospedagem
        $this->mailer->Port = 465; //porta so smtp
        $this->mailerSMTPDebug = 0;
        $this->mailer->SMTPAuth = true;
        $this->mailer = 'ssl';
        $this->mailer = $this->email;
        $this->mailer = $this->senha;

        $this->mailer->IsHTML(true);
        $this->mailer->SingleTo = true;
        $this->mailer->From = $this->email;
        $this->mailer->FromName = $this->senha;
    }
}


?>