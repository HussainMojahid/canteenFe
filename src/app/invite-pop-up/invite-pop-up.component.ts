// invite-popup.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Component({
  selector: 'app-invite-popup',
  templateUrl: './invite-pop-up.component.html',
  styleUrls: ['./invite-pop-up.component.css'],
})
export class InvitePopupComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  // Function to handle the click event for inviting via WhatsApp
  inviteViaWhatsApp() {
    //
    
  }

  // Function to handle the click event for inviting via Message
  inviteViaMessage() {
    // Put your logic here for inviting via Message
   
  }

  // Function to handle the click event for inviting via Telegram
  inviteViaTelegram() {
    // Put your logic here for inviting via Telegram
    
  }

  // Function to handle the click event for inviting via Mail
  inviteViaMail() {
    // Put your logic here for inviting via Mail
    
  }
}
