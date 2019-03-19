import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'teamFilter'
})
export class TeamFilterPipe implements PipeTransform {

    transform(members: any, prop: any, type: any): any {
        if (!prop || !type) return members;

        return members.filter(member => member[prop] === type);
    }

}
