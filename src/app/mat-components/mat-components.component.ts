import { Component, OnInit, Inject } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-mat-components',
  templateUrl: './mat-components.component.html',
  styleUrls: ['./mat-components.component.scss']
})
export class MatComponentsComponent implements OnInit {

  animal: string;
  name: string;

  constructor(private bottomSheet: MatBottomSheet, public dialog: MatDialog) { }

  ngOnInit() {
  }

  openBottomSheet(): void {
    this.bottomSheet.open(MyBottomSheetComponent);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(MyDialogComponent, {
      width: '250px',
      data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.animal = result;
    });
  }

}

@Component({
  selector: 'app-bottom-sheet',
  templateUrl: 'bottom-sheet.html',
})
export class MyBottomSheetComponent {
  constructor(private bottomSheetRef: MatBottomSheetRef<MyBottomSheetComponent>) { }

  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }
}

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-dialog',
  templateUrl: 'dialog.html',
})
export class MyDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<MyDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
