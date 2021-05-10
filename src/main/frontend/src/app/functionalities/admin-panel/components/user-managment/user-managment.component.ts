import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { UserService } from '../../../../shared/service/user.service';
import { UserDto } from '../../../../core/api-models';
import { MatPaginator } from '@angular/material';

@Component({
  selector: 'app-user-managment',
  templateUrl: './user-managment.component.html',
  styleUrls: ['./user-managment.component.scss']
})
export class UserManagmentComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;

  displayedColumns: string[] = ['id', 'username', 'nip', 'active', 'requestStatus', 'actions'];
  userDataSource = [];
  RequestStatus = RequestStatus;

  constructor(private sanitizer: DomSanitizer,
              private userService: UserService) {
  }

  ngOnInit() {
    this.getUsersForAdm();
  }

  private getUsersForAdm() {
    this.userService.getUsersForAdmin({pageSize: this.paginator.pageSize, pageNumber: this.paginator.pageIndex}).subscribe(it => {
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
}

enum RequestStatus {
  SENDED = 'SENDED', ACCEPTED = 'ACCEPTED', DECLINED = 'DECLINED'
}

