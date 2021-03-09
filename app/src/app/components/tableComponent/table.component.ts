/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit, ViewChild } from '@angular/core'
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';


/*
Client Service import Example:
import { servicename } from 'app/sd-services/servicename';
*/

/*
Legacy Service import Example :
import { HeroService } from '../../services/hero/hero.service';
*/

@Component({
    selector: 'bh-table',
    templateUrl: './table.template.html'
})

export class tableComponent extends NBaseComponent implements OnInit {

    data =[
        {'name':'vinaykumar','email':'vinay@ah.co.in','contact':'7890436789'},
        {'name':'kumar','email':'kumar@ah.co.in','contact':'7890436785'},
        {'name':'tanguturu','email':'tan@ah.co.in','contact':'7890436784'},
        {'name':'dhoni','email':'ang@ah.co.in','contact':'7890436781'},
        {'name':'virat','email':'virat@hdfc.in','contact':'7890436787'},
        {'name':'rohit','email':'rohit@ah.co.in','contact':'7890436734'}



    ]
    datasource = new MatTableDataSource(this.data)
    @ViewChild(MatPaginator,{static:true}) paginator:MatPaginator
    @ViewChild(MatSort) sort:MatSort;


    constructor() {
        super();
    }

    ngOnInit() {
        this.datasource.paginator = this.paginator

    }
    ngAfterViewInit() {
        this.datasource.sort = this.sort
    }
    search(data){
        if (data.length >= 1){
            this.datasource.filter = data.trim().toLocaleLowerCase()
            
        }else{
            this.datasource.filter = data
        }
    }
}
