import{Ya as i,d as c,g as s,n as a,y as o}from"./chunk-4FVIKDPJ.js";var n=e=>e.data;var p=class e extends i{merchantUser(t){return this.request("GET",`users/${t}/merchants`).pipe(s(r=>n(r)))}merchantServices(t){return this.request("GET",`merchants/${t}/services`).pipe(s(r=>n(r)))}static \u0275fac=(()=>{let t;return function(d){return(t||(t=o(e)))(d||e)}})();static \u0275prov=a({token:e,factory:e.\u0275fac,providedIn:"root"})};var h=class e{selectedMerchantId=new c(null);selectedMerchantId$=this.selectedMerchantId.asObservable();setSelectedMerchantId(t){this.selectedMerchantId.next(t)}getSelectedMerchantId(){return this.selectedMerchantId.getValue()}static \u0275fac=function(r){return new(r||e)};static \u0275prov=a({token:e,factory:e.\u0275fac,providedIn:"root"})};export{p as a,h as b};
