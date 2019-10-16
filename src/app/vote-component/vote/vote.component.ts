import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.scss']
})
export class VoteComponent implements OnInit {
  totalCount = 0;

  constructor() { }

upVote(){
  return this.totalCount++;
}

downVote(){
  return this.totalCount--;
}

  ngOnInit() {
  }

}
