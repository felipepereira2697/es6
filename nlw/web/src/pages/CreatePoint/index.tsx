import React, {useEffect, useState, ChangeEvent} from 'react';
import './style.css';
import logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';
import {Map, TileLayer, Marker} from 'react-leaflet';

import api from '../../services/api';
import axios from 'axios';

//Sempre que criamos um estado para um array ou objeto
//a gente precisa manualmente informar o tipo da variavel q vai ser armazenada
//podemos usar interface pra fazer isso

interface Item {
    id: number;
    title: string;
    image_url: string;
}

interface IBGEUFResponse {
     sigla:string;
}

interface IBGECityResponse {
    nome:string;
}

const CreatePoint = () => {
    //vamos criar um estado e armazenar dados dentro do cmp
    const [items, setItems] = useState<Item[]>([]);
    const [ufs, setUfs] = useState<string[]>([]);
    const [cities, setCities] = useState<string[]>([]);
    const [selectedUf, setSelectedUf] = useState('0');
    
    // useEffect recebe dois parametros: qual funcao quero executar, quando
    //quando --> quando tal info mudar
    useEffect(() => {
        //dessa forma que foi declarado, vamos executar somente uma unica vez, assim q carregar o cmp
        api.get("items").then(response => {
            setItems(response.data);
        })
    }, [])

    useEffect(() => {
        //Servico do IBGE
        axios.get<IBGEUFResponse[]>("https://servicodados.ibge.gov.br/api/v1/localidades/estados").then(response => {
            const ufInitials = response.data.map(uf => uf.sigla );
            setUfs(ufInitials);
        })
    })
    
    useEffect(() => {
        if(selectedUf === '0'){
            return;
        }
        axios.get<IBGECityResponse[]>(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`)
        .then(response => {
            const cityNames = response.data.map(city => city.nome );
            setCities(cityNames);
            
        });

    },[selectedUf]);
    function handleSelect(event: ChangeEvent<HTMLSelectElement>) {
        const ufSelected = event.target.value;
        setSelectedUf(ufSelected);
    }
    return (

        <div id="page-create-point">
            <header>
                <img src={logo} alt="Ecoleta" />
                <Link to="/">
                    <FiArrowLeft />
                    Voltar para home
                </Link>
            </header>
            <form action="">
                <h1>Cadastro do <br/> Ponto de coleta</h1>
                <fieldset>
                    <legend>
                        <h2>Dados</h2>

                    </legend>
                    <div className="field">
                        <label htmlFor="name">Nome da entidade</label>
                        <input type="text"
                            name="name"
                            id="name"
                        />                        
                    </div>
                    <div className="field-group">
                        <div className="field">
                            <label htmlFor="email">E-mail</label>
                            <input type="email"
                                name="email"
                                id="email"
                            />                        
                        </div> 
                        <div className="field">
                            <label htmlFor="whatsapp">Whatsapp</label>
                            <input type="text"
                                name="whatsapp"
                                id="whatsapp"
                            />                        
                        </div>        
                    </div>
                    

                </fieldset>

                <fieldset>
                    <legend>
                        <h2>Endereço</h2>
                        <span>Selecione o endereço no mapa</span>
                    </legend>
                    <Map center={[40.7485492,-73.9879522] } zoom={15}>
                        <TileLayer
                            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={[40.7485492,-73.9879522] }/>
                    
                    </Map>
                    <div className="field-group">
                        <div className="field">
                            <label htmlFor="uf">Estado (UF)</label>
                            <select name="uf" id="uf" value={selectedUf} onChange={handleSelect}>
                                <option value="0">Selecione uma uf</option>
                                {ufs.map(uf => (
                                    <option key={uf} value={uf}>{uf}</option>
                                ))}
                            </select>
                        </div>

                        <div className="field">
                            <label htmlFor="city">Cidade</label>
                            <select name="city" id="city">
                                <option value="0">Selecione uma cidade</option>
                                {cities.map(city => (
                                    <option key={city} value={city}>{city}</option>
                                ))}
                            </select>
                        </div>


                    </div>
                </fieldset>

                <fieldset>
                    <legend>
                        <h2>Itens de coleta</h2>
                        <span>Selecione um ou mais itens abaixo</span>
                    </legend>

                    <ul className="items-grid">
                        {items.map(item => (

                            <li key={item.id}>
                                <img src={item.image_url} alt={item.title}/>
                                <span>{item.title}</span>
                            </li>
                        ))}
                        
                    </ul>
                </fieldset>
                <button type="submit">Cadastrar ponto de coleta</button>
            </form>
        </div>
    );
}

export default CreatePoint;