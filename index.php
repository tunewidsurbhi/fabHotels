<div ng-app="test" ng-controller='MainCtrl'>
  <label>Current Value</label>
  <input type="number" ng-model="curVal" min="0" max="100">  

  <br><br>
  
  <progress-bar cur-val='{{curVal}}' max-val='{{maxVal}}'></progress-bar>
  
</div>