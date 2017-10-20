import { Component, OnInit, OnDestroy, DoCheck, Input } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-entry',
  animations: [
  trigger('visibilityChanged', [
    state('yes' , style({ opacity: 1, transform: 'scale(1.0)' })),
    state('no', style({ opacity: 0, transform: 'scale(0.0)' })),
    transition('yes => no', animate('300ms')),
    transition('no => yes', animate('900ms'))
  ])],
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit, OnDestroy {

  words:string[] = [
    "ace",
    "amazing",
    "astonishing",
    "astounding",
    "awe-inspiring",
    "awesome",
    "badass",
    "beautiful",
    "bedazzling",
    "bee's knees",
    "best",
    "breathtaking",
    "brilliant",
    "cat's meow",
    "cat's pajamas",
    "classy",
    "cool",
    "dandy",
    "dazzling",
    "delightful",
    "divine",
    "doozie",
    "epic",
    "excellent",
    "exceptional",
    "exquisite",
    "extraordinary",
    "fabulous",
    "fantastic",
    "fantabulous",
    "fine",
    "finest",
    "first-class",
    "first-rate",
    "flawless",
    "funkadelic",
    "geometric",
    "glorious",
    "gnarly",
    "good",
    "grand",
    "great",
    "groovy",
    "groundbreaking",
    "hunky-dory",
    "impeccable",
    "impressive",
    "incredible",
    "kickass",
    "kryptonian",
    "laudable",
    "legendary",
    "lovely",
    "luminous",
    "magnificent",
    "majestic",
    "marvelous",
    "mathematical",
    "mind-blowing",
    "neat",
    "outstanding",
    "peachy",
    "perfect",
    "phenomenal",
    "pioneering",
    "polished",
    "posh",
    "praiseworthy",
    "premium",
    "priceless",
    "prime",
    "primo",
    "rad",
    "remarkable",
    "riveting",
    "scrumtrulescent",
    "sensational",
    "shining",
    "slick",
    "smashing",
    "solid",
    "spectacular",
    "splendid",
    "stellar",
    "striking",
    "stunning",
    "stupendous",
    "stylish",
    "sublime",
    "super",
    "super-duper",
    "super-excellent",
    "superb",
    "superior",
    "supreme",
    "sweet",
    "swell",
    "terrific",
    "tiptop",
    "top-notch",
    "transcendent",
    "tremendous",
    "ultimate",
    "unreal",
    "well-made",
    "wicked",
    "wonderful",
    "wondrous",
    "world-class"
  ]

  @Input() isVisible:boolean = true;

  constructor() { }

  operate:boolean = false;

  simpleTimer:boolean = true;

  timeout:any;

  simpleReset() {
    this.timeout = setTimeout(() => {
      if (!this.simpleTimer) {
        return false;
      } else if (!this.operate) {
        this.operate = true;
        this.simpleReset();
      } else {
        this.operate = false;
        clearTimeout(this.timeout);
        this.word = 'simple';
        setTimeout(() => {
          console.log('new timeout')
          this.simpleReset();
        }, 4000)
      }
    }, 1000)
  }

  word:string = 'simple';

  getTime() {
    return (Math.floor(Math.random() * 10) * 100);
  }

  timer = Observable.timer(0, 200);

  getWord() {
    let w = Math.floor(Math.random() * this.words.length);
    this.word = this.words[w];
  }

  ngOnInit() {
    this.simpleReset();
    this.timer.takeWhile(() => this.operate).subscribe(() => {this.getWord();});
  }

  check:boolean = true;

  ngDoCheck() {
    if (this.operate != this.check) {
      this.timer.takeWhile(() => this.operate).subscribe(() => {this.getWord();});
      this.check = this.operate;
    }
  }

  ngOnDestroy() {
    this.operate = false;
    this.simpleTimer = false;
  }

}
