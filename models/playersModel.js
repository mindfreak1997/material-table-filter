
module.exports=(sequelize,DataTypes)=>{
    const players=sequelize.define('players',{
        Name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Language: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Country: {
            type: DataTypes.STRING,
            allowNull: false
        },
        GameName :{
            type: DataTypes.STRING,
            allowNull: false 
        },
        Bought :{
            type:DataTypes.STRING,
            allowNull:false
        },
        BankBalance:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        Rating:{
            type: DataTypes.INTEGER,
            allowNull: false 
        },
        TotalWinnings:{
            type: DataTypes.INTEGER,
            allowNull: false 
        },
        Jan:{
            type: DataTypes.INTEGER,
            allowNull: false 
        },
        Feb:{
            type: DataTypes.INTEGER,
            allowNull: false 
        },
        Mar:{
            type: DataTypes.INTEGER,
            allowNull: false 
        },
        Apr:{
            type: DataTypes.INTEGER,
            allowNull: false 
        },
        May:{
            type: DataTypes.INTEGER,
            allowNull: false 
        },
        Jun:{
            type: DataTypes.INTEGER,
            allowNull: false 
        },
        Jul:{
            type: DataTypes.INTEGER,
            allowNull: false 
        },
        Aug:{
            type: DataTypes.INTEGER,
            allowNull: false 
        },
        Sep:{
            type: DataTypes.INTEGER,
            allowNull: false 
        },
        Oct:{
            type: DataTypes.INTEGER,
            allowNull: false 
        },
        Nov:{
            type: DataTypes.INTEGER,
            allowNull: false 
        },
        Dec:{
            type: DataTypes.INTEGER,
            allowNull: false 
        }
       
    })
    return players
}