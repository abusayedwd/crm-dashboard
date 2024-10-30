import React from 'react';
import Card from './Card';
 
import Project from './project/Project';
import Service from './service/Service';
 
 
 
 

const DashboardHome = () => {
 
    return (
        <div>
            <Card> </Card>
             <Project></Project>
            <Service />
       
        </div>
    );
};

export default DashboardHome;