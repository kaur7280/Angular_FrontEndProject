import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  li:any;
 some=[
  {name:[] = new Array() },
  {name:[] = new Array() },
  {name:[] = new Array() },
  {name:[] = new Array() },
  {name:[] = new Array() },
  {name:[] = new Array() },
  {name:[] = new Array() },
  {name:[] = new Array() },
  {name:[] = new Array() },
  {name:[] = new Array() },
  {name:[] = new Array() },
  {name:[] = new Array() },
  {name:[] = new Array() },
  {name:[] = new Array() },
  {name:[] = new Array() },
  {name:[] = new Array() },
  {name:[] = new Array() },
  {name:[] = new Array() },
  {name:[] = new Array() },
  {name:[] = new Array() },
  {name:[] = new Array() },
  {name:[] = new Array() },
  {name:[] = new Array() },
  {name:[] = new Array() },
  {name:[] = new Array() }
];
lis:any;
tagName=[''];
grd =[];
num :any;
avg=0;
avgs=[26];
searchText='';
searchTagText='';
showMe=[false];
togglebtn=['collapsible'];

  constructor(private http: HttpClient){}

  ngOnInit():void{
   
  
    
    
    this.http.get('https://api.hatchways.io/assessment/students').subscribe(

      Response => {
        this.li=Response;
        this.lis= Array.from(this.li.students);
        for(let i = 0; i <this.lis.length ; i++){
          this.togglebtn[i] = 'collapsible';
        }
        for(let i = 0; i <this.lis.length; i++){
          this.showMe[i] = false;
        }
        for(let i = 0; i <this.lis.length; i++){
          this.grd =Array.from(this.lis[i].grades);

          for(let j = 0; j < this.grd.length; j++){
            this.num = parseInt(this.grd[j]); 
            this.avg = this.avg + this.num;
        
            }
          this.avg = this.avg/this.grd.length;
          this.avgs[i] = this.avg;
        }
      }
      
      
    )
    
  }
  
  toggleClick(id: any){

   this.showMe[id]=!this.showMe[id];
   if(this.showMe[id]) {
    this.togglebtn[id] = 'active';
    } else {
    this.togglebtn[id] = 'collapsible';
    }
  }
 

  onCreateTag(i:any){

    this.some[i].name.push(this.tagName[i]);
    this.tagName[i]=''

  }

 
}
