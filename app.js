const yargs = require('yargs')

//////// add student command////////////
    const system=require('./grades')

    yargs.command({
            command:'add',
            describe: 'Add student',
            builder:{
                id:{
                    describe: 'id of student has been added',
                    demandOption:true,
                    type: 'number'
                    },
                username:{
                        describe: 'name of student has been added',
                        demandOption:true,
                        type: 'string'
                },
                grade:{
                    describe: 'grade of student has been added',
                    demandOption:true,
                    type: 'number'
                       },
                comment:{
                describe: 'comment on  student has been added',
                
                type: 'string'
                 },
                body:{
                    describe: 'Body of student to be added',
                        
                        type: 'string'
                },
            },
            handler: function(argv){
   
                system.addStudents(argv.id,argv.username,argv.grade,argv.comment)
                console.log('Student Id is', argv.id)
                console.log('Student username is', argv.username)
                console.log('student grade is', argv.grade)
                console.log('comment is', argv.comment)  
                
            }
        
        })


///////////////////// Delete student command/////////////////////////
        yargs.command({
            command:'Delete',
            describe: 'Delete student',
            builder:{
                id:{
                    describe: 'id of student has been added',
                    demandOption:true,
                    type:'number'
                    },
                username:{
                        describe: 'name of student has been added',
                        
                        type: 'string'
                },
                grade:{
                    describe: 'grade of student has been added',
                    
                    type: 'number'
                       },

                comment:{
                describe: 'comment on student has been added',
                
                type: 'string'
                 },
                body:{
                    describe: 'Body of student to be deleted',
                        
                        type: 'number'
                },
            },
            handler: function(argv){
   
                system.removeStudent(argv.id)
                console.log('student removed whose id is', argv.id)
                
                
            }
        
        })

////////////////////// read students command/////////////////////
        yargs.command({
            command:'read',
            describe: 'read student',
            builder:{
                id:{
                    describe: 'id of student has been added',
                    demandOption:true,
                    type: 'number'
                    },
                username:{
                        describe: 'name of student has been added',
                        
                        type: 'string'
                },
                grade:{
                    describe: 'grade of student has been added',
                    
                    type: 'number'
                       },
                comment:{
                describe: 'comment on student has been added',
                
                type: 'string'
                 },
                body:{
                    describe: 'Body of student to be added',
                        
                        type: 'string'
                },
            },
            handler: function(argv){
   
                system.readStudents(argv.id)
                
                
            }
        
        })

        ////////////////list command///////////////

        yargs.command({
            command:'list',
            describe: 'list students',
            builder:{
                id:{
                    describe: 'id of student has been added',
                    
                    type:'number'
                    },
                username:{
                        describe: 'name of student has been added',
                        
                        type: 'string'
                },
                grade:{
                    describe: 'grade of student has been added',
                    
                    type: 'number'
                       },

                comment:{
                describe: 'comment on  student has been added',
                
                type: 'string'
                 },
                body:{
                    describe: 'Body of student to be added',
                       
                        type: 'string'
                },
            },
            handler: function(){
                system.listStudents()
                console.log('students have been listed ')
            }
        
        })


 console.log(yargs.argv)
yargs.parse()