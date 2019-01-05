import React from 'react';

class NameCard extends React.Component {
    render() {
        const {name,phone,age,job,isMan,tag}=this.props;
        return (
            <div className="alert alert-success">
                <h4 className="alert-heading">{this.props.name}</h4>
                <ul>
                    <li>电话：{this.props.phone}</li>
                    <li>年龄：{this.props.age}</li>
                    <li>职位：{this.props.job}</li>
                    <li>性别：{isMan==="true"?'男':"女"}</li>
                </ul>
                <hr/>
                <p>
                    {this.props.tag.map((item,index)=>(
                    <span  className="badge badge-pill badge-primary" key={index}>{item}</span>)
                    )}
                </p>
                <hr/>
                <h4 className="alert-heading">{name}</h4>
                <ul>
                    <li>电话：{phone}</li>
                    <li>年龄：{age}</li>
                    <li>职位：{job}</li>
                    <li>性别：{isMan==="true"?'男':"女"}</li>
                </ul>
                <hr/>
                <p>
                    {tag.map((item,index)=>(
                    <span className="badge badge-pill badge-primary" key={index}>{item}</span>)
                    )}
                </p>
            </div>
        );
    }
}

export default NameCard;