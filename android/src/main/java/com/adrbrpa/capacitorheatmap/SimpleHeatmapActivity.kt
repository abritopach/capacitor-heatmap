package com.adrbrpa.capacitorheatmap

import android.os.Bundle
import android.util.Log
import androidx.appcompat.app.AppCompatActivity
import androidx.core.math.MathUtils.clamp
import com.adrbrpa.capacitorheatmap.heatmaps.SimpleHeatmap
import com.adrbrpa.capacitorheatmap.capacitorheatmap.R
import com.adrbrpa.capacitorheatmap.data.models.Point
import java.util.*

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
        drawNewMap()
    }

    private fun drawNewMap() {
        Log.d(TAG, "[Heatmap Plugin Native Android]: SimpleHeatmapActivity::drawNewMap method called")
        simpleHeatmap.clearData()
        val rand = Random()
        //add 20 random points of random intensity
        for (i in 0..19) {
            val point = Point(
                clamp(rand.nextFloat(), 0.0f, 1.0f),
                clamp(rand.nextFloat(), 0.0f, 1.0f), clamp(rand.nextFloat(), 0.0f, 1.0f)
            )
            simpleHeatmap.addPoint(point)
        }
        simpleHeatmap.draw()
    }

}