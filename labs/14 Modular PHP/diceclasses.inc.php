<?php

class Dice {
    private  $faces;
    private  $freqs = array();
    
    // Constructor
    public function __construct($faces) {
        $this->faces = $faces;
    }
    
    public function cast() {
        $res = rand(1,$this->faces);
        $this->freqs[$res]++;
        return $res;
    }
    
    public function getFreq($eyes) {
        $freq = $this->freqs[$eyes];
        if ($freq=="")
            $freq = 0;
        return $freq;
    }
}

?>