import React from 'react';


function Form(){
    


    return(
    <div className="container">
      <form>
  <div class="row">
    <div class="col">
        <label><h3><span class="badge badge-light">Firstname</span></h3></label>
      <input type="text" class="form-control" />
    </div>
    <div class="col">
    <label><h3><span class="badge badge-light">Lastname</span></h3></label>
      <input type="text" class="form-control" />
    </div>
  </div>
  <label for="exampleFormControlTextarea1"><h3><span class="badge badge-light">Feedback :</span></h3></label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" ></textarea>
    <button type="button" class="btn btn-dark">Submit</button>
</form>
    </div>
    );
}

export default Form;