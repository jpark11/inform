'use strict';

//import dependency
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//create new instance of mongoose.schema. 
var ResultsSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    num: Number,
    brand: String,
    parent: String,
    industry: String,
    domain: String,
    cei_rating: Number,
    women_on_board: Number,
    best_workplaces_women: Number,
    best_workplaces_diversity: Number,
    fairness_score: Number,
    esg_score: Number,
    gc_score: Number,
    corporate_knights_score: Number,
    sustainability_score: Number, 
    greener_electronics: Number,
    clean_energy_index: Number,
    natural_gas_intensity: Number,
    coal_intensity: Number, 
    nuclear_intensity: Number, 
    energy_transparency: Number, 
    renewable_energy_commitment: Number, 
    energy_efficiency: Number, 
    renewable_procurement: Number, 
    advocacy: Number, 
    detox_2020_plan: Number, 
    pfc_elimination: Number, 
    transparency: Number, 
    environmental_score: Number,
    avg_score: Number,
    total_score: Number,
    competitors: String,
    competitor_scores: String
}, {collection: 'inform'});

module.exports = mongoose.model('Result', ResultsSchema);