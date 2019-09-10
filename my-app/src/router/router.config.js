import React, { Component } from 'react';
import Login from '../views/login';
import Index from '../views/Index';
import SateModelManage from '../views/sateModelManage';
import SateModel from '../views/sateModel';
import InstrumentModelManage from '../views/instrumentModelManage';
import InstrumentModel from '../views/instrumentModel';

const router = {
    routes: [{
            path: '/Login',
            component: Login
        },
        {
            path: '/Index',
            component: Index,
            children: [{
                    path: '/index/sateModelManage',
                    component: SateModelManage,
                },
                {
                    path: '/index/sateModel',
                    component: SateModel,
                },
                {
                    path: '/index/instrumentModelManage',
                    component: InstrumentModelManage,
                },
                {
                    path: '/index/instrumentModel',
                    component: InstrumentModel,
                },
            ]
        }
    ]
}
export default router