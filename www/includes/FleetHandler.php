﻿<?php

/**
 *  OGA
 *  Copyright (C) 2013 groop oga.4local.ru
 *
 * This program is software created oga.4local.ru group developer.
 * @package OGA
 * @author oga.4local.ru
 * @copyright 2013 oga.4local.ru
 * @info $Id: FleetHandler.php
 */
 
#$GLOBALS['DATABASE']->query("LOCK TABLE ".AKS." WRITE, ".RW." WRITE, ".MESSAGES." WRITE, ".CONFIG." WRITE, ".FLEETS_EVENT." WRITE, ".FLEETS." WRITE, ".PLANETS." WRITE, ".PLANETS." as p WRITE, ".TOPKB." WRITE, ".USERS." WRITE, ".USERS." as u WRITE, ".STATPOINTS." WRITE;");	

$token			= getRandomString();

$fleetResult	= $GLOBALS['DATABASE']->query("UPDATE ".FLEETS_EVENT." SET `lock` = '".$token."' WHERE `lock` IS NULL AND `time` <= ". TIMESTAMP .";");

if($GLOBALS['DATABASE']->affectedRows() !== 0) {
	require_once('includes/classes/class.FlyingFleetHandler.php');
	
	$fleetObj	= new FlyingFleetHandler();
	$fleetObj->setToken($token);
	$fleetObj->run();

	$GLOBALS['DATABASE']->query("UPDATE ".FLEETS_EVENT." SET `lock` = NULL WHERE `lock` = '".$token."';"); #UNLOCK TABLES
}