import React, { Component } from 'react';
import { render } from 'react-dom';
import PropTypes from "prop-types";
class Person extends Component {
    // 进行属性的校验工作
    static propTypes = {
        name: PropTypes.string.isRequired,
        age: PropTypes.number.isRequired,
        hobby: PropTypes.array,
        gender: PropTypes.oneOf(['男', '女']),
        // props是组件的所有属性
        // name是salary
        // componentName就是当前组件
        salary: function (props, name, componentName) {
            if (props[name] < 0) {
                throw new Error(`Error in ${componentName},${props[name]} is too low`);
            }
        },
        position: PropTypes.shape({
            x: PropTypes.number,
            y: PropTypes.number
        })
    }
    constructor() {
        super();
    }
    render() {
        return (<div>
            {this.props.name}
        </div>)
    }
}
// Person.propTypes = { }
let person = {
    name: 'jw',
    age: 18,
    hobby: ['sleep', 'eat'],
    gender: '男',
    salary: 10000,
    position: { x: 100, y: 100 }
}
render(<Person {...person} />, window.root);