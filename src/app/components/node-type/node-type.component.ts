import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {ControlValueAccessor} from '@angular/forms';

@Component({
  selector: 'app-node-type',
  templateUrl: './node-type.component.html',
  styleUrls: ['./node-type.component.scss']
})
export class NodeTypeComponent implements ControlValueAccessor, OnInit {
  @Input() public required: any;
  @Input() public _value = false;

  public types = [
    {key: 'cloud', value: 'Cloud'},
    {key: 'nat', value: 'NAT'},
    {key: 'ethernet_hub', value: 'Hub'},
    {key: 'ethernet_switch', value: 'Switch'},
    {key: 'frame_relay_switch', value: 'Frame Relay'},
    {key: 'atm_switch', value: 'ATM'},
    {key: 'docker', value: 'Docker'},
    {key: 'dynamips', value: 'Dynamips'},
    {key: 'vpcs', value: 'VPCS'},
    {key: 'virtualbox', value: 'VirtualBox'},
    {key: 'vmware', value: 'VMWare'},
    {key: 'iou', value: 'IOU'},
    {key: 'qemu', value: 'Qemu'}
  ];
  public checkModel: any;
  public onChange: any = () => {};
  public onTouched: any = () => {};

  constructor(private cdr: ChangeDetectorRef) {
  }

  ngOnInit() {
  }

  onSelect(id) {
    this.checkModel = this.value = id;
    this.cdr.detectChanges();
  }

  get value() {
    return this._value;
  }

  set value(val) {
    this._value = val;
    this.onChange(val);
    this.cdr.detectChanges();
  }

  public registerOnChange(fn) {
    this.onChange = fn;
  }

  public writeValue(value) {
    this.checkModel = this.value = value;
  }

  public registerOnTouched(fn) {
    this.onTouched = fn;
  }
}
