	'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let Usuario = sequelize.define('Usuario',{
		id: {
			field: 'ID_USUARIOS_CLIENTES',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},		
		nome: {
			field: 'NOME',
			type: DataTypes.STRING,
			allowNull: false
		},
		login: {
			field: 'LOGIN',
			type: DataTypes.STRING,
			allowNull: false
		},
		senha: {
			field: 'SENHA',
			type: DataTypes.STRING,
			allowNull: false
		}
	}, 
	{
		tableName: 'USUARIOS_CLIENTES', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return Usuario;
};
