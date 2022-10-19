const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
require('dotenv').config();
const cors = require("cors");
var bodyParser = require('body-parser');
const Schemas = require("./Schema.js");
const DB = "mongodb+srv://snips:snips@cluster0.hscsw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
app = express();
const port = process.env.PORT || 8080;
app.use(cors());
app.use(bodyParser.urlencoded({
    limit: '10mb',
    parameterLimit: 100000,
    extended: false 
}));

app.use(bodyParser.json({
    limit: '10mb'
}));
const jwtKey = process.env.SASTA_JWT;

// Connecting to Database

mongoose.connect(DB).then(() => {
	console.log("Connected to Database");
}).catch(err => console.log("Error while connecting - "+err));
const Students = new mongoose.model("student", Schemas.studentSchema);

app.post("/api/updateResult", async(req, res) => {
    let data = req.body.data;
    let token = req.body.token;
    let exam = req.body.exam;
    console.log(exam);
    try {
        let vData = jwt.verify(token, jwtKey);
        if(vData.role=="teacher") {
            data.forEach(async(e) => {

                let newData;
            if(exam==0) {
                    if(e['ADM NO']) {
                        let st = await Students.find({admNo : e['ADM NO']});
                        newData = {
                            admNo:st['admNo'],
                            cls:st['cls'],
                            sec:st['sec'],
                            pass:st['pass'],
                            sName:st['sName'],
                            fName:st['fName'],
                            mName:st['mName'],
                            fNum:st['fNum'],
                            mNum:st['mNum'],
                            dob:st['dob'],
                            doa:st['doa'],
                            house:st['house'],
                            session: st['session'],
                            address:st['address'],
                            halfenglishRhymes:st['halfenglishRhymes'],
                            halfenglishConversation:st['halfenglishConversation'],
                            halfenglishOral:st['halfenglishOral'],
                            halfenglishHandwriting:st['halfenglishHandwriting'],
                            halfenglishWrittenOne:e['ENG LANG'],
                            halfenglishWrittenTwo:e['ENG. LIT'],
                            halfhindiRhymes:st['halfhindiRhymes'],
                            halfhindiOral:st['halfhindiOral'],
                            halfhindiHandwriting:st['halfhindiHandwriting'],
                            halfhindiWritten:e['HINDI'],
                            halfsanskrit:st['halfsanskrit'],
                            halfmathsOral:st['halfmathsOral'],
                            halfmathsWritten:e['MATHS'],
                            halfphysics:e['PHY'],
                            halfchemistry:e['CHEM'],
                            halfbiology:e['BIOLOGY'],
                            halfhistory:e['HIS.CIV'],
                            halfgeography:e['GEO'],
                            halfgenScience:st['halfgenScience'],
                            halfsocScience:st['halfsocScience'],
                            halfcomputer:e['COMP.APPL']?e['COMP.APPL']:0,
                            halfcommerce:e['COMM']?e['COMM']:0,
                            halfdrawing:st['halfdrawing'],
                            halfgenKnowledge:st['halfgenKnowledge'],
                            halfmoralScience:st['halfmoralScience'],
                            halfattendence:st['halfattendence'],
                            halfpercentage:e['PERCEN'],
                            halfmanners:{
                                behaviour:st[''],
                                neatnessOfWork:st[''],
                                punctuality:st[''],
                                coCirricular:st['']
                            },
                            annualenglishRhymes:st['annualenglishRhymes'],
                            annualenglishConversation:st['annualenglishConversation'],
                            annualenglishOral:st['annualenglishOral'],
                            annualenglishHandwriting:st['annualenglishHandwriting'],
                            annualenglishWrittenOne:st['annualenglishWrittenOne'],
                            annualenglishWrittenTwo:st['annualenglishWrittenTwo'],
                            annualhindiRhymes:st['annualhindiRhymes'],
                            annualhindiOral:st['annualhindiOral'],
                            annualhindiHandwriting:st['annualhindiHandwriting'],
                            annualhindiWritten:st['annualhindiWritten'],
                            annualsanskrit:st['annualsanskrit'],
                            annualmathsOral:st['annualmathsOral'],
                            annualmathsWritten:st['annualmathsWritten'],
                            annualphysics:st['annualphysics'],
                            annualchemistry:st['annualchemistry'],
                            annualbiology:st['annualbiology'],
                            annualhistory:st['annualhistory'],
                            annualgeography:st['annualgeography'],
                            annualgenScience:st['annualgenScience'],
                            annualsocScience:st['annualsocScience'],
                            annualcomputer:st['annualcomputer'],
                            annualdrawing:st['annualdrawing'],
                            annualgenKnowledge:st['annualgenKnowledge'],
                            annualmoralScience:st['annualmoralScience'],
                            annualattendence:st['annualattendence'],
                            annualpercentage:st['annualpercentage'],
                            annualmanners:{
                                behaviour:st[''],
                                neatnessOfWork:st[''],
                                punctuality:st[''],
                                coCirricular:st['']
                            },
                            fee : st['fee']
                        };
                let result = await Students.updateOne({admNo : e['ADM NO']}, {$set : newData});
                console.log("Updated");
            }
                    else {
                        console.log(e)
                    }
                }
                else {
                    if(e['ADM NO']) {
                    newData = {
                        admNo:st['admNo'],
                        cls:st['cls'],
                        sec:st['sec'],
                    pass:st['pass'],
                    sName:st['sName'],
                    fName:st['fName'],
                    mName:st['mName'],
                    fNum:st['fNum'],
                    mNum:st['mNum'],
                    dob:st['dob'],
                    doa:st['doa'],
                    house:st['house'],
                    session: st['session'],
                    address:st['address'],
                    halfenglishRhymes:st['halfenglishRhymes'],
                    halfenglishConversation:st['halfenglishConversation'],
                    halfenglishOral:st['halfenglishOral'],
                    halfenglishHandwriting:st['halfenglishHandwriting'],
                    halfenglishWrittenOne:st['halfenglishWrittenOne'],
                    halfenglishWrittenTwo:st['halfenglishWrittenTwo'],
                    halfhindiRhymes:st['halfhindiRhymes'],
                    halfhindiOral:st['halfhindiOral'],
                    halfhindiHandwriting:st['halfhindiHandwriting'],
                    halfhindiWritten:st['halfhindiWritten'],
                    halfsanskrit:st['halfsanskrit'],
                    halfmathsOral:st['halfmathsOral'],
                    halfmathsWritten:st['halfmathsWritten'],
                    halfphysics:st['halfphysics'],
                    halfchemistry:st['halfchemistry'],
                    halfbiology:st['halfbiology'],
                    halfhistory:st['halfhistory'],
                    halfgeography:st['halfgeography'],
                    halfgenScience:st['halfgenScience'],
                    halfsocScience:st['halfsocScience'],
                    halfcomputer:st['halfcomputer'],
                    halfcommerce:st['halfcommerce'],
                    halfdrawing:st['halfdrawing'],
                    halfgenKnowledge:st['halfgenKnowledge'],
                    halfmoralScience:st['halfmoralScience'],
                    halfattendence:st['halfattendence'],
                    halfpercentage:st['halfpercentage'],
                    halfmanners:{
                        behaviour:'',
                        neatnessOfWork:'',
                        punctuality:'',
                        coCirricular:''
                    },
                    
                    annualenglishRhymes:st['annualenglishRhymes'],
                    annualenglishConversation:st['annualenglishConversation'],
                    annualenglishOral:st['annualenglishOral'],
                    annualenglishHandwriting:st['annualenglishHandwriting'],
                    annualenglishWrittenOne:e['ENG LANG'],
                    annualenglishWrittenTwo:e['ENG. LIT'],
                    annualhindiRhymes:st['annualhindiRhymes'],
                    annualhindiOral:st['annualhindiOral'],
                    annualhindiHandwriting:st['annualhindiHandwriting'],
                    annualhindiWritten:e['HINDI'],
                    annualsanskrit:st['annualsanskrit'],
                    annualmathsOral:st['annualmathsOral'],
                    annualmathsWritten:e['MATHS'],
                    annualphysics:e['PHY'],
                    annualchemistry:e['CHEM'],
                    annualbiology:e['BIOLOGY'],
                    annualhistory:e['HIS.CIV'],
                    annualgeography:e['GEO'],
                    annualgenScience:st['annualgenScience'],
                    annualsocScience:st['annualsocScience'],
                    annualcomputer:e['COMP.APPL']?e['COMP.APPL']:0,
                    annualcommerce:e['COMM']?e['COMM']:0,
                    annualdrawing:st['annualdrawing'],
                    annualgenKnowledge:st['annualgenKnowledge'],
                    annualmoralScience:st['annualmoralScience'],
                    annualattendence:st['annualattendence'],
                    annualpercentage:e['PERCEN'],
                    annualmanners:{
                        behaviour:'',
                        neatnessOfWork:'',
                        punctuality:'',
                        coCirricular:''
                    },
                    fee : st['fee']
                };
                let result = await Students.updateOne({admNo : e['ADM NO']}, {$set : newData});
                console.log("Student Updated with admno = "+e['ADM NO']);
                
                }
            }
        });
        res.json({
            message : 'success'
        });;
        }
        else {
            res.json({
                message : "nice try kid"
            });
        }
    } catch(err) {
        console.log(err);
        res.json({
            message: 'error'
        });
    }
});



app.listen(port, () => console.log("Server Started!"));