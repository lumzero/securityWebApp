import { Component } from '@angular/core';
import Message from './message';
import * as CryptoJS from 'crypto-js';  


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Encrypt-R-us';
  message : Message;
  encryptedText = "";
  username = "";

  constructor(){
    this.message = new Message();
  }

  submit() {

    if(this.message.name == ""|| this.message.password == ""|| this.message.secret == "")
    {
      alert("Niet alle velden zijn ingevuld");
      return;
    }

    this.username = this.message.name;
    
    let password = this.message.password;
    let plaintext = this.message.secret;

    var encrypted = CryptoJS.AES.encrypt(plaintext, password);
    this.encryptedText = encrypted.toString();
    
    //alert("Success, je boodschap is naar de server verstuurd!")
  }


  decrypt() {
      var decrypted = CryptoJS.AES.decrypt(this.encryptedText, this.message.password);

      if(decrypted.toString(CryptoJS.enc.Utf8).length <= 0){
        alert("No secret 4 u");
        this.encryptedText = "";
      } else {
        this.message.secret = decrypted.toString(CryptoJS.enc.Utf8);
      }
      
  }

}
