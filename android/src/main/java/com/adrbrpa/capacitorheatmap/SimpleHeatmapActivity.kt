package com.adrbrpa.capacitorheatmap

import android.os.Bundle
import android.util.Log
import androidx.appcompat.app.AppCompatActivity
import com.adrbrpa.capacitorheatmap.heatmaps.SimpleHeatmap
import com.adrbrpa.capacitorheatmap.capacitorheatmap.R

class SimpleHeatmapActivity: AppCompatActivity() {

    private val TAG: String = SimpleHeatmapActivity::class.java.simpleName
    private lateinit var simpleHeatmap: SimpleHeatmap

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        Log.d(TAG, "[Heatmap Plugin Native Android]: SimpleHeatmapActivity::onCreate method called")
        setContentView(R.layout.simple_heatmap_layout)
        simpleHeatmap = findViewById(R.id.simple_heatmap)
        simpleHeatmap.setMin(0.0)
        simpleHeatmap.setMax(100.0)
    }

}