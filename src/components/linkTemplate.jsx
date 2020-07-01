import React from 'react';
import './linkTemplate.css';

function Linktemplate(props){
    return(
        <div className="temp">
            <div className="row">
  <div className="col-sm-6">
    <div className="card individ">
      <div className="card-body">
      <span class="badge badge-danger">Chinese App</span>
        <h5 className="card-title">{props.chinaapp}</h5>
    <p className="card-text"></p>
        
      </div>
    </div>
  </div>
  <div className="col-sm-6">
    <div className="card individ">
      <div className="card-body">
      <span class="badge badge-success">Alternative</span>
    <h5 className="card-title">{props.altapp}</h5>
        
        <a href="#" class="btn btn-primary">Download</a>
      </div>
    </div>
  </div>
</div>
        </div>
    );
}

export default Linktemplate;