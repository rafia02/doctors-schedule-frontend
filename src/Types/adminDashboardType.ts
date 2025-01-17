export interface Department{
    _id: string
    title: string;
    subDescription: string;
    longDescription: string;
    mainImage: string;
    iconImage: string;
    benifit: string
    services: []
}




// addspecilized type 

interface Service {
    service: string;
  }
  
 export interface FormDataType {
    title: string;
    subDescription: string;
    longDescription: string;
    mainImage: FileList | null;
    iconImage: FileList | null;
    benifit: string;
    services: Service[];
  }




  // add patient services 
  export interface AddPatientServiceForm {
    specialized: string;
    image: FileList | null;
  }



  // show patient Services 
  export interface Services{
    _id: string
    specialized: string;
    image: string;
}

