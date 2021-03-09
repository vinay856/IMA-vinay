/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

/*
Client Service import Example:
import { servicename } from 'app/sd-services/servicename';
*/

/*
Legacy Service import Example :
import { HeroService } from '../../services/hero/hero.service';
*/

@Component({
    selector: 'bh-sessionpage2',
    templateUrl: './sessionpage2.template.html'
})

export class sessionpage2Component extends NBaseComponent implements OnInit {
    loginform;
 
    constructor(public fb: FormBuilder) {
        super();
    }
 
    ngOnInit() {
        this.loginform = this.fb.group({
            Username:[''],
            Password:['']
        });
        
 
    }
 
    onSubmit(){
        console.log(this.loginform.value);
    }
}
