import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class CounterComponent extends Component{
    @tracked count = 0;
    @tracked multiply = 1;

    @action double(){
        this.multiply = this.multiply*2;
    }
    @action change(amount){
        this.count = this.count+amount;   
    }

    get total(){
        return this.multiply*this.count;
    }
}