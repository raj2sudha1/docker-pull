                        var Client = require('azure-iothub').Client;
var connectionString = 'HostName=IOTCOPSY.azure-devices.net;SharedAccessKeyName=iothubowner;SharedAccessKey=2voH08x10F8oruR5QdyW3cvdCXfTbSAg8zFcNVE+S8E=';
                        var methodName = "stop";
                        var deviceId = 'IOTCOP_Raspberry';
                        var client=Client.fromConnectionString(connectionString);
                        var methodParams = {
                                methodName:methodName,
                                payload: 'docker pull',
                                timeoutInSeconds:60
                        };
                        client.invokeDeviceMethod(deviceId, methodParams, function (err, result){
                                if(err){
                                 console.error("failed to invoke method \'" + methodName + "\': " + err.message);
                                 }else{
                                  console.log(methodName + ' on ' + deviceId + ' : ');
                                  console.log(JSON.stringify(result, null, 2));
                                 }
                        });
