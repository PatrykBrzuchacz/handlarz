import {Component, OnInit, ViewChild} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {UserService} from '../../../../shared/service/user.service';
import {SubscriptionDto, UserCriteria, UserDto} from '../../../../core/api-models';
import {MatPaginator} from '@angular/material';
import {FormBuilder, FormGroup} from '@angular/forms';
import {SubscriptionService} from '../subscription/subscription.service';

@Component({
  selector: 'app-user-managment',
  templateUrl: './user-managment.component.html',
  styleUrls: ['./user-managment.component.scss']
})
export class UserManagmentComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;

  displayedColumns: string[] = ['id', 'username', 'nip', 'subscription', 'active', 'requestStatus', 'actions'];
  userDataSource = [];
  RequestStatus = RequestStatus;
  formCriteria: FormGroup;
  subscriptions: SubscriptionDto[] = [];

  constructor(private sanitizer: DomSanitizer,
              private userService: UserService,
              private fb: FormBuilder,
              private subscriptionService: SubscriptionService) {
  }

  ngOnInit() {
    this.initFormCriteria();
    this.getUsersForAdm();
    this.subscriptionService.getAll().subscribe(it => this.subscriptions = it);

  }

  private getUsersForAdm() {
    this.userService.getUsersForAdmin(this.getCriteria()).subscribe(it => {
      this.userDataSource = it;
    });
  }

  onPaginationChange(event) {
    this.getUsersForAdm();
  }

  changeRequest(user: UserDto, requestStatus: RequestStatus) {
    this.userService.changeRequest(user.id, requestStatus)
      .subscribe(it => {
        this.getUsersForAdm();
      });
  }

  changeActive(user: UserDto) {
    this.userService.changeActive(user.id, !user.active).subscribe(it => {
      this.getUsersForAdm();
    });
  }

  getCriteria(): UserCriteria {
    const criteria = this.formCriteria.getRawValue();
    criteria.pagesize = this.paginator.pageSize;
    criteria.pageIndex = this.paginator.pageIndex;

    return criteria;
  }

  initFormCriteria() {
    this.formCriteria = this.fb.group({
      username: null,
      firstName: null,
      lastName: null,
      requestStatus: null,
      nip: null,
      subscription: null
    });
  }

  compareByValue(f1: any, f2: any) {
    return f1 && f2 && f1.name === f2.name;
  }
}

enum RequestStatus {
  SENDED = 'SENDED', ACCEPTED = 'ACCEPTED', DECLINED = 'DECLINED'
}

