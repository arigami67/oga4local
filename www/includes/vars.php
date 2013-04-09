<?php

/**
 *  OGA
 *  Copyright (C) 2013 groop oga.4local.ru
 *
 * This program is software created oga.4local.ru group developer.
 * @package OGA
 * @author oga.4local.ru
 * @copyright 2013 oga.4local.ru
 * @info $Id: vars.php
 */

// VARS DB -> SCRIPT WRAPPER

$CACHE->add('vars', 'VarsBuildCache');
extract($CACHE->get('vars'));
$resource[901] = 'metal';
$resource[902] = 'crystal';
$resource[903] = 'deuterium';
$resource[911] = 'energy';
$resource[921] = 'darkmatter';

$reslist['ressources']  = array(901, 902, 903, 911, 921);
$reslist['resstype'][1] = array(901, 902, 903);
$reslist['resstype'][2] = array(911);
$reslist['resstype'][3] = array(921);