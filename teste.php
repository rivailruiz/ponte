<?php

$client = new http\Client;
$request = new http\Client\Request;

$request->setRequestUrl('http://www.ecoponte.com.br/Xml/TempoViagem.xml');
$request->setRequestMethod('GET');
$request->setQuery(new http\QueryString(array(
  'v' => '43'
)));

$request->setHeaders(array(
  'postman-token' => '791c14a4-ad84-a696-4536-e54cb59c4e49',
  'cache-control' => 'no-cache'
));

$client->enqueue($request)->send();
$response = $client->getResponse();

echo $response->getBody();