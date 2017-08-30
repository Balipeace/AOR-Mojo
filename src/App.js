// in src/App.js
import 'babel-polyfill';
import React, { Component } from 'react';
import { Admin, Delete, Resource } from 'admin-on-rest';

import './App.css';


import sagas from './sagas';
import themeReducer from './themeReducer';
import Login from './Login';
import Layout from './Layout';
import Menu from './Menu';
import { Dashboard } from './dashboard';
import customRoutes from './routes';
import translations from './i18n';

import { BatchList, BatchCreate, BatchEdit, BatchDelete, BatchIcon } from './batches';
import { GrainList, GrainCreate, GrainEdit, GrainDelete, GrainIcon } from './grains';
import { WoodList, WoodCreate, WoodEdit, WoodDelete, WoodIcon } from './woods';
import { SpawnList, SpawnCreate, SpawnEdit, SpawnDelete, SpawnIcon } from './spawns';
import { BatchunitList, BatchunitEdit, BatchunitIcon } from './batchunits';
import { GrowthList, GrowthCreate, GrowthEdit, GrowthIcon } from './growths';
import { StrainList, StrainIcon } from './strains';

import loopbackRestClient, {authClient}  from 'aor-loopback';

class App extends Component {

	render() {
		return (

	<Admin
	    title="Indofungi Mojo"
		restClient = {loopbackRestClient('http://192.168.1.183:4001/api')}
		authClient={authClient('http://192.168.1.183:4001/api/users/login')}

		customReducers={{ theme: themeReducer }}
        customSagas={sagas}
        customRoutes={customRoutes}
        authClient={authClient}
        dashboard={Dashboard}
        loginPage={Login}
        appLayout={Layout}
        menu={Menu}
        messages={translations}
		>

		<Resource name="Batches" list={BatchList} create={BatchCreate} edit={BatchEdit} remove={BatchDelete} icon={BatchIcon} />
		<Resource name="Grains" list={GrainList} create={GrainCreate} edit={GrainEdit} remove={GrainDelete} icon={GrainIcon} />
		<Resource name="Woods" list={WoodList} create={WoodCreate} edit={WoodEdit} remove={WoodDelete} icon={WoodIcon} />
		<Resource name="Spawns" list={SpawnList} create={SpawnCreate} edit={SpawnEdit} remove={SpawnDelete} icon={SpawnIcon} />
		<Resource name="Batchunits" list={BatchunitList} edit={BatchunitEdit} icon={SpawnIcon}/>
		<Resource name="Growths" list={GrowthList} create={GrowthCreate} edit={GrowthEdit} icon={GrowthIcon}/>
		<Resource name="Strains" list={StrainList} icon={StrainIcon}/>


		</Admin>
       );
	}
}

export default App;
