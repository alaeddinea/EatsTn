

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ApiResponse } from '../domain/api.response';



@Injectable({
  providedIn: 'root'
})
export class CrudGlobalService {

  
   baseUrl="http://192.168.100.200:8080/api/" ;
   
  constructor(private httpClient: HttpClient) {
  
  }




  createLigne(ojetUrl  :any, ojet :any):Observable<ApiResponse>{
  
   return this.httpClient.post<ApiResponse>(this.baseUrl+ojetUrl+"/add",ojet);
  }
 
  
  getlistEntity(ojetUrl :any  ):Observable<ApiResponse>
  {
  return this.httpClient.get<ApiResponse>(this.baseUrl+ojetUrl+"/all");
  }
  
  deleteLigne(ojetUrl: any,idOjet :any ):Observable<ApiResponse>
  {
  return this.httpClient.delete<ApiResponse>(this.baseUrl+ojetUrl+"/delete/"+idOjet);
  }
 


  updateLigne(ojetUrl :any,ojet :any):Observable<ApiResponse>{
  
  return this.httpClient.put<ApiResponse>(this.baseUrl+ojetUrl+"/update",ojet);
  }
  getLigneById(ojetUrl: any,idOjet :any ):Observable<ApiResponse>{
    return this.httpClient.get<ApiResponse>(this.baseUrl+ojetUrl+"/getone/"+idOjet);
    }
    findpaginated(ojetUrl :any,pageNumber :any,pageSize:any  ):Observable<ApiResponse>
    {
    return this.httpClient.get<ApiResponse>(this.baseUrl+ojetUrl+"/findpaginated/"+pageNumber+"/"+pageSize);
    }
 
  findCategorieByRestaurant(ojetUrl  :any, idOjet :any):Observable<ApiResponse>{
    return this.httpClient.get<ApiResponse>(this.baseUrl+ojetUrl+"/findCategorieByRestaurant/"+idOjet);
  }
  findArticleByRestaurant(ojetUrl  :any, idOjet :any):Observable<ApiResponse>{
    return this.httpClient.get<ApiResponse>(this.baseUrl+ojetUrl+"/findArticleByRestaurant/"+idOjet);
  }
  findByDeliveryfeeeLessThanEqual(ojetUrl  :any, idOjet :any):Observable<ApiResponse>{
    return this.httpClient.get<ApiResponse>(this.baseUrl+ojetUrl+"/findByDeliveryfeeeLessThanEqual/"+idOjet);
  }
 
      imp(ojetUrl :any,ojet :any):Observable<ApiResponse>{
  
        return this.httpClient.put<ApiResponse>(this.baseUrl+ojetUrl+"/imp",ojet);
        }
  
  

        allUsers(ojetUrl: any  ):Observable<ApiResponse>{
          return this.httpClient.get<ApiResponse>(this.baseUrl+ojetUrl+"/allUsers" );
          }
          updateuser(ojetUrl  :any, ojet :any):Observable<ApiResponse>{
  
            return this.httpClient.post<ApiResponse>(this.baseUrl+ojetUrl+"/updateuser",ojet);
           }
  

                    //stat
           getStatE(ojetUrl: any  ):Observable<ApiResponse>{
            return this.httpClient.get<ApiResponse>(this.baseUrl+ojetUrl+"/getStatE" );
            }
            
            getStatEn(ojetUrl: any  ):Observable<ApiResponse>{
            return this.httpClient.get<ApiResponse>(this.baseUrl+ojetUrl+"/getStatEn" );
            }
            
            getStatF(ojetUrl: any  ):Observable<ApiResponse>{
            return this.httpClient.get<ApiResponse>(this.baseUrl+ojetUrl+"/getStatF" );
            }
            getStatJTotal(ojetUrl: any  ):Observable<ApiResponse>{
              return this.httpClient.get<ApiResponse>(this.baseUrl+ojetUrl+"/getStatJTotal" );
              }
            getStatJEn(ojetUrl: any  ):Observable<ApiResponse>{
            return this.httpClient.get<ApiResponse>(this.baseUrl+ojetUrl+"/getStatJEn" );
            }
            
            getStatJF(ojetUrl: any  ):Observable<ApiResponse>{
            return this.httpClient.get<ApiResponse>(this.baseUrl+ojetUrl+"/getStatJF" );
            }
            
            getStatU(ojetUrl: any  ):Observable<ApiResponse>{
            return this.httpClient.get<ApiResponse>(this.baseUrl+ojetUrl+"/getStatU" );
            }
            
            getStatM(ojetUrl: any  ):Observable<ApiResponse>{
            return this.httpClient.get<ApiResponse>(this.baseUrl+ojetUrl+"/getStatM" );
            }
            getbyemail(ojetUrl: any,email :any,code:any ):Observable<ApiResponse>{
              return this.httpClient.get<ApiResponse>(this.baseUrl+ojetUrl+"/getbyemail/"+email+"/"+code);
              }
}

