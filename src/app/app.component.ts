import { Component } from '@angular/core';
import { View, EventSettingsModel } from '@syncfusion/ej2-angular-schedule';
import { DataManager, WebApiAdaptor} from '@syncfusion/ej2-data';
@Component({
  selector: 'app-root',
  template:'<ejs-schedule heigth="850" width="1250" [eventSettings]="eventObject" [selectedDate]="setDate" [currentView]="setView"></ejs-schedule>',
  //templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calendariof';
  public setView: View = 'WorkWeek';
  public setDate: Date = new Date(2020, 6, 22);
  private eventData: DataManager = new DataManager({
    url: 'https://js.syncfusion.com/demos/ejservices/api/Schedule/LoadData',
    adaptor: new WebApiAdaptor,
    crossDomain: true

  });
    
  public eventObject: EventSettingsModel = {
    dataSource: this.eventData
  }
}
