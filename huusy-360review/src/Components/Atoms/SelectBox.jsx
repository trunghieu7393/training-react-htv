import React, {Component} from 'react';

class SelectBox extends Component {
    render() {
        const {label, optionContent}=this.props;
        return (
            <div class="form-group mb-4">
                <label class="title" style={{fontSize: '1em'}} for="inputState">
                  {/* TÌm kiếm lựa chọn theo team */}
                  {label}
                </label>
                <select id="inputState" class="form-control">
                  <option selected disabled>Lựa chọn</option>
                  {optionContent.map((item,key)=> 
                    <option value="1">{item}</option>
                  )}
                  {/* <option value="1">Team Front-End</option>
                  <option value="2">Team PHP</option>
                  <option value="3">Team Node.js</option> */}
                </select>
              </div>
        )
    }
}

export default SelectBox;