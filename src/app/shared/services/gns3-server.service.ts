import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {environment} from '../../../environments/environment';
import {map} from 'rxjs/operators';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class Gns3ServerService {
  private projectId = new BehaviorSubject<string>('');
  public currentProject = this.projectId.asObservable();
  private httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) {
  }

  changeProject(projectId: string) {
    this.projectId.next(projectId);
  }

  createProject(name): Observable<any> {
    const body = {name};
    return this.http.post(environment.apiRootUrl + '/projects', body, this.httpOptions);
  }

  openProject(projectId): Observable<any> {
    return this.http.post(environment.apiRootUrl + '/projects/' + projectId + '/open', {}, this.httpOptions);
  }

  closeProject(projectId): Observable<any> {
    return this.http.post(environment.apiRootUrl + '/projects/' + projectId + '/close', {}, this.httpOptions);
  }

  getNodes(projectId): Observable<any> {
    return this.http.get(environment.apiRootUrl + '/projects/' + projectId + '/nodes', this.httpOptions);
  }

  createNode(projectId, name, node_type, compute_id = 'local'): Observable<any> {
    const body = {
      name,
      node_type,
      compute_id
    };
    return this.http.post(environment.apiRootUrl + '/projects/' + projectId + '/nodes', body, this.httpOptions);
  }

  getProjectList(): Observable<any> {
    return this.http.get(environment.apiRootUrl + '/projects', this.httpOptions);
  }

  getOpenedProjects(): Observable<any> {
    return this.getProjectList().pipe(
      map(_r => {
        return _r.filter(_res => _res.status === 'opened');
      })
    );
  }

  reloadNode(nodeId, projectId) {
    return this.http.post(`${environment.apiRootUrl}/projects/${projectId}/nodes/${nodeId}/reload`, {}, this.httpOptions);
  }

  startNode(nodeId, projectId) {
    return this.http.post(`${environment.apiRootUrl}/projects/${projectId}/nodes/${nodeId}/start`, {}, this.httpOptions);
  }

  stopNode(nodeId, projectId) {
    return this.http.post(`${environment.apiRootUrl}/projects/${projectId}/nodes/${nodeId}/stop`, {}, this.httpOptions);
  }

  suspendNode(nodeId, projectId) {
    return this.http.post(`${environment.apiRootUrl}/projects/${projectId}/nodes/${nodeId}/suspend`, {}, this.httpOptions);
  }

  linkNode(primaryNodeId, secondaryNodeId, projectId) {
    const body = {
      nodes: [{
        adapter_number: 0,
        node_id: primaryNodeId,
        port_number: 0
      },
        {
          adapter_number: 0,
          node_id: secondaryNodeId,
          port_number: 0
        }]
    };
    return this.http.post(`${environment.apiRootUrl}/projects/${projectId}/links`, body, this.httpOptions);
  }

  deleteNode(nodeId, projectId) {
    return this.http.delete(`${environment.apiRootUrl}/projects/${projectId}/nodes/${nodeId}`, this.httpOptions);
  }
}
