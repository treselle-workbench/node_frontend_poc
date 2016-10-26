var http = require('http');

var listFiles = function() {
    var files = fs.readdirSync(appDir + "/uploads/");
    return files;
}

// This is the base controller. Used for base routes, such as the default index/root path, 404 error pages, and others.
module.exports = {
    api: {
        handler: function(request, reply) {

            var apiParamDetail = {};
            apiParamDetail.apiUrl = (request.params.name === 'user_details') ? request.params.name : '/' + request.params.name;
            apiParamDetail.apiPort = (request.params.name === 'breeddetails') ? 3001 : (request.params.name === 'contentdetails') ? 3002 : 3003;
            //apiParamDetail.host = (request.params.name === 'breeddetails') ? 'local.adoptapet.com' : (request.params.name === 'contentdetails') ? 'local.adoptapet.com' : '54.146.4.238';
            apiParamDetail.host = '0.0.0.0';

            var options = {
              host: apiParamDetail.host, // 'local.adoptapet.com' // '54.146.4.238'
              json: true,
              port: apiParamDetail.apiPort,
              path: apiParamDetail.apiUrl,
              method: 'GET'
            };
            console.log(options);

            callback = function(response) {
                var str = '';

                //another chunk of data has been recieved, so append it to `str`
                response.on('data', function(chunk) {
                    str += chunk;
                });

                //the whole response has been recieved, so we just print it out here
                response.on('end', function() {
                    //var obj = JSON.parse(str);
                    //console.log(str);

                    var obj = JSON.parse(str);
                    reply(obj);

                   /* riot.mount('my_hoge', { data: data });*/
                    /*
                    reply.view('home', {
                        title: 'Welcome to Adopt a Pet',
                        test: obj

                    });
                    */

                });
            }

            http.request(options, callback).end();

            // Render the view with the custom greeting

        },
        app: {
            name: 'home'
        }
    },

    search: {
        handler: function(request, reply) {
            reply.view('search', {
                title: 'Search'

            });
        },
        app: {
            name: 'Others'
        }
    },

    others: {
        handler: function(request, reply) {
            reply.view('404', {
                title: 'Not Found'
            })
        }
    },

}