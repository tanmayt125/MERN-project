import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.min.js';

const Community=()=>{
  return(
    <div>

      <div style={{display: 'flex',  justifyContent:'center', alignItems:'flex-start', height: '85vh',marginTop:"20px",backgroundColor:"wheat"}}>
      <div class="card" style={{width:"50%"}}>
          <div class="card-header">
               <h5>Abhishek Swaraj</h5>
               <small class="text-muted">30 minutes ago</small>
           </div>
      <div class="card-body">
          <h5 class="card-title">Hellooooooooooooo all !!!</h5>
          <p class="card-text">I get palced in Google. Now I am very rich so I will gift a brand new FORTUNER to Tanmay and also I will give him job offer in my team</p>
          <br/>
          <a href="#" style={{margin:'10px'}}><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="gray" class="bi bi-hand-thumbs-up-fill" viewBox="0 0 16 16">
          <path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a9.84 9.84 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733.058.119.103.242.138.363.077.27.113.567.113.856 0 .289-.036.586-.113.856-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.163 3.163 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.82 4.82 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z"/>
          </svg></a>
          <a href="#" style={{marginLeft:'30px'}}><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="gray" class="bi bi-hand-thumbs-down-fill" viewBox="0 0 16 16">
          <path d="M6.956 14.534c.065.936.952 1.659 1.908 1.42l.261-.065a1.378 1.378 0 0 0 1.012-.965c.22-.816.533-2.512.062-4.51.136.02.285.037.443.051.713.065 1.669.071 2.516-.211.518-.173.994-.68 1.2-1.272a1.896 1.896 0 0 0-.234-1.734c.058-.118.103-.242.138-.362.077-.27.113-.568.113-.856 0-.29-.036-.586-.113-.857a2.094 2.094 0 0 0-.16-.403c.169-.387.107-.82-.003-1.149a3.162 3.162 0 0 0-.488-.9c.054-.153.076-.313.076-.465a1.86 1.86 0 0 0-.253-.912C13.1.757 12.437.28 11.5.28H8c-.605 0-1.07.08-1.466.217a4.823 4.823 0 0 0-.97.485l-.048.029c-.504.308-.999.61-2.068.723C2.682 1.815 2 2.434 2 3.279v4c0 .851.685 1.433 1.357 1.616.849.232 1.574.787 2.132 1.41.56.626.914 1.28 1.039 1.638.199.575.356 1.54.428 2.591z"/>
          </svg></a>
          <br/>
          <small class="text-muted" style={{marginLeft:'15px',paddingTop:'10px', textDecorationColor:"gray"}}>50</small>
          <small class="text-muted"style={{marginLeft:'56px',paddingTop:'10px', textDecorationColor:"gray"}}>0</small>

      </div>
      <div style={{background: "#f0f0f0",paddingTop:"7px",paddingBottom:"7px"}}>
      <span class="card-text"style={{marginLeft:'20px',marginRight:'15px'}}>Comments</span>
      <span class="card-text" style={{marginRight:'510px'}}>50</span>
      <a data-bs-toggle="collapse" href="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-chevron-expand" >
        <path fill-rule="evenodd" d="M3.646 9.146a.5.5 0 0 1 .708 0L8 12.793l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708zm0-2.292a.5.5 0 0 0 .708 0L8 3.207l3.646 3.647a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 0 .708z"/>
      </svg>
      </a>
      <div class="collapse" id="collapseExample">
         <div class="card card-body" style={{overflowY:"scroll", height:"30vh"}}>
            Remember to keep comments respectful
            <div class="mb-3">
             <label for="exampleFormControlInput1" class="form-label"></label>
             <div style={{"marginTop":"5px","marginBottom":"15px"}}>
             <button type="button" class="btn btn-light" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">
             Add a public comment...
             </button>
             </div>
             <div>
               <hr/>
               <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-emoji-sunglasses" viewBox="0 0 16 16">
                 <path d="M4.968 9.75a.5.5 0 1 0-.866.5A4.498 4.498 0 0 0 8 12.5a4.5 4.5 0 0 0 3.898-2.25.5.5 0 1 0-.866-.5A3.498 3.498 0 0 1 8 11.5a3.498 3.498 0 0 1-3.032-1.75zM7 5.116V5a1 1 0 0 0-1-1H3.28a1 1 0 0 0-.97 1.243l.311 1.242A2 2 0 0 0 4.561 8H5a2 2 0 0 0 1.994-1.839A2.99 2.99 0 0 1 8 6c.393 0 .74.064 1.006.161A2 2 0 0 0 11 8h.438a2 2 0 0 0 1.94-1.515l.311-1.242A1 1 0 0 0 12.72 4H10a1 1 0 0 0-1 1v.116A4.22 4.22 0 0 0 8 5c-.35 0-.69.04-1 .116z"/>
                 <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-1 0A7 7 0 1 0 1 8a7 7 0 0 0 14 0z"/>
               </svg>
               <span style={{margin:"10px"}}>Tanmay Tiwari</span>
               <small class="text-muted" >- 2 minutes ago</small>
               <a href="#" style={{marginLeft:"350px"}}>
               <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                 <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                 <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                 </svg>
               </a>  
               <p>
               <span style={{marginLeft:"35px",marginRight:"50px"}}>I am very happy with your success.I am now at amazon</span>
               </p>
               <hr/>
               <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-emoji-smile" viewBox="0 0 16 16">
               <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
              <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
              </svg>
               <span style={{margin:"10px"}}>Saket Vajpayee</span>
               <small class="text-muted">- 2 minutes ago</small>
               <p style={{marginLeft:"35px"}}>I am now at Facebook</p>
               <hr/>
               <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-emoji-heart-eyes" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                  <path d="M11.315 10.014a.5.5 0 0 1 .548.736A4.498 4.498 0 0 1 7.965 13a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .548-.736h.005l.017.005.067.015.252.055c.215.046.515.108.857.169.693.124 1.522.242 2.152.242.63 0 1.46-.118 2.152-.242a26.58 26.58 0 0 0 1.109-.224l.067-.015.017-.004.005-.002zM4.756 4.566c.763-1.424 4.02-.12.952 3.434-4.496-1.596-2.35-4.298-.952-3.434zm6.488 0c1.398-.864 3.544 1.838-.952 3.434-3.067-3.554.19-4.858.952-3.434z"/>
               </svg>
               <span style={{margin:"10px"}}>Miss World</span>
               <small class="text-muted">- 5 minutes ago</small>
               <p style={{marginLeft:"35px"}}>Please marry me!</p>
               <hr/>
             </div>
        
             <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{marginTop:"50vh",marginRight:"0px"}}>
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-body">
        <form>
          <div class="mb-3">
            <input type="text" class="form-control" id="recipient-name" placeholder="Add a public comment... "/>
          </div>
        </form>
      </div>
      <div class="modal-footer">
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        <button type="button" class="btn btn-primary"><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-telegram" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z"/>
</svg></button>
      </div>
    </div>
  </div>
</div>
           </div>
       </div>


</div>
      </div>
    </div>
    

</div>
</div>
  )
}

export default Community